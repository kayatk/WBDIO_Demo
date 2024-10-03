import axios from 'axios';
import { Buffer } from 'buffer'; 

class MailHogService {
   
    private mailHogAPI: string;
    private targetEmail: string;

    constructor(targetEmail: string) {
        this.mailHogAPI = 'https://mail.test.flirtmachine.io/api/v2/messages';
        this.targetEmail = targetEmail;
    }

    // Function to decode Base64-encoded string to UTF-8
    private decodeBase64(base64String: string): string {
        try {
            // Sanitize and pad the Base64 string
            let sanitizedBase64Content = base64String.replace(/[^A-Za-z0-9+/=]/g, '');
            const padding = sanitizedBase64Content.length % 4;
            if (padding) {
                sanitizedBase64Content += '='.repeat(4 - padding);
            }
            // Decode Base64 content
            const decodedBuffer = Buffer.from(sanitizedBase64Content, 'base64');
            return decodedBuffer.toString('utf-8');
        } catch (error) {
            console.error('Error decoding Base64 content:', error);
            throw new Error('Failed to decode Base64 content');
        }
    }

    // Function to split and process the content after a specific header
    private processContent(fullContent: string): string {
        try {
            const headerDelimiter = 'Content-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n';
            const delimiterIndex = fullContent.indexOf(headerDelimiter);

            if (delimiterIndex === -1) {
                throw new Error('Delimiter not found in the content');
            }

            // Extract Base64 content part
            const base64Content = fullContent.substring(delimiterIndex + headerDelimiter.length).trim();

            // Decode the Base64 content
            return this.decodeBase64(base64Content);
        } catch (error) {
            console.error('Error processing content:', error);
            throw new Error('Failed to process content');
        }
    }

    // Function to retrieve the email from MailHog and extract the activation URL
    public async getActivationLink(): Promise<string | null> {
        try {
            //setTimeout('5000');
            const response = await axios.get(this.mailHogAPI);
            console.info("RESPONSE is =====================> : "+response)
            const messages = response.data.items;
            console.info("MESSAGES ========================> : "+messages)
            const emailMessage = messages.find((message: any) => {
                const toHeader = message.Content.Headers.To[0];
                const emailRegex = /<(.+?)>/;
                const match = toHeader.match(emailRegex);
                console.info("match ========================> : "+match)
                console.info("targetEmail ========================> : "+this.targetEmail)
                return match && match[1] === this.targetEmail;
            });

            if (!emailMessage) {
                throw new Error('No email found for the specified address.');
            }
            const fullContent = emailMessage.Content.Body;
            const decodedString = this.processContent(fullContent);
            const urlPattern = /https:\/\/www\.test\.flirtmachine\.io\/activate\/[a-f0-9]{32}\?custom=[\w\.]+/i;
            const match = decodedString.match(urlPattern);

            return match ? match[0] : null;
        } catch (error) {
            console.error('Error retrieving or decoding email:', error);
            throw new Error('Failed to retrieve or decode email');
        }
    }

    public static async navigateToActivationURL(email: string): Promise<string | null> {
        const mailHogService = new MailHogService(email);
        const activationUrl = await mailHogService.getActivationLink();
        if (activationUrl) {
            await console.log("Activation URL retrieved:", activationUrl);
            await browser.url(activationUrl); 
            await browser.pause(3000); //===>>>check in later
        } else {
            throw new Error("Failed to retrieve the activation URL.");
        }
        return null
    }
}

export default MailHogService;