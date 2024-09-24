import axios from 'axios';
import { Buffer } from 'buffer'; // Import Buffer for Node.js environment

const MailHogAPI = 'https://mail.test.flirtmachine.io/api/v2/messages';

describe('Handle Application SignUp Process', () => {
    it('Verify Login Process', async () => {

        // Function to decode Base64-encoded string to UTF-8
        const decodeBase64 = (base64String: string): string => {
            try {
                console.log('Raw Base64 String:', base64String);

                // Ensure Base64 string is correctly padded
                let sanitizedBase64Content = base64String.replace(/[^A-Za-z0-9+/=]/g, '');
                console.log('Sanitized Base64 Content:', sanitizedBase64Content);

                // Add padding if necessary
                const padding = sanitizedBase64Content.length % 4;
                if (padding) {
                    sanitizedBase64Content += '='.repeat(4 - padding);
                }
                console.log('Base64 Content with Padding:', sanitizedBase64Content);

                // Decode the Base64 content
                const decodedBuffer = Buffer.from(sanitizedBase64Content, 'base64');
                const decodedString = decodedBuffer.toString('utf-8');
                console.log('Decoded String:', decodedString);

                return decodedString;
            } catch (error) {
                console.error('Error decoding Base64 content:', error);
                throw new Error('Failed to decode Base64 content');
            }
        };

        // Function to split content and decode after a specific header
        const processContent = (fullContent: string): string => {
            try {
                const headerDelimiter = 'Content-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n';
                const delimiterIndex = fullContent.indexOf(headerDelimiter);

                if (delimiterIndex === -1) {
                    throw new Error('Delimiter not found in the content');
                }

                // Extract the Base64 content part
                const base64Content = fullContent.substring(delimiterIndex + headerDelimiter.length).trim();
                console.log('Base64 Content:', base64Content);

                // Decode the Base64 content
                return decodeBase64(base64Content);
            } catch (error) {
                console.error('Error processing content:', error);
                throw new Error('Failed to process content');
            }
        };

        // Function to retrieve email from MailHog
        const getEmailFromMailHog = async (): Promise<any> => {
            try {
                const response = await axios.get(MailHogAPI);
                const messages = response.data.items;

                // Log the full MailHog response for debugging
                console.log('MailHog API Response:', response.data);

                // Find the message for the specified email
                const emailMessage = messages.find((message: any) => {
                    const toHeader = message.Content.Headers.To[0];
                    const emailRegex = /<(.+?)>/; // Regex to extract email address from "To" header
                    const match = toHeader.match(emailRegex);
                    return match && match[1] === 'kayatst12+auto57@gmail.com';
                });

                if (!emailMessage) {
                    throw new Error('No email found for the specified address.');
                }

                // Extract and log the email content
                const fullContent = emailMessage.Content.Body;
                console.log('Full Email Content:', fullContent);

                // Process and decode the content
                const decodedString = processContent(fullContent);
                console.log('Decoded String:', decodedString);

                // Define the regular expression to match the URL pattern
            const urlPattern = /https:\/\/www\.test\.flirtmachine\.io\/activate\/[a-f0-9]{32}\?custom=[\w\.]+/i;
    
            // Search for the URL in the HTML content
            const match = decodedString.match(urlPattern);
    
            // Return the first match if found, otherwise null
            console.log("URL is"+match)
            return match ? match[0] : null;

            } catch (error) {
                console.error('Error retrieving or decoding email from MailHog:', error);
                throw new Error('Failed to retrieve or decode email');
            }
        };
       
        try {
            // Retrieve and process the email
            const email = await getEmailFromMailHog();
            console.log('Retrieved email content:', email.decodedString);

        } catch (error) {
            console.error('Error in the test:', error);
            throw error;
        }
    });
});
