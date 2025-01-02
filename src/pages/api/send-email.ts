import type { NextApiRequest, NextApiResponse } from 'next'
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  }
})

interface EmailRequestBody {
  name: string
  email: string
  subject: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }

  const { name, email, subject, message } = req.body as EmailRequestBody

  // Input validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [process.env.RECIPIENT_EMAIL!]
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `New contact form submission: ${subject}`
      }
    },
    Source: process.env.SENDER_EMAIL!
  })

  try {
    const response = await sesClient.send(command)
    console.log('Email sent successfully:', response.MessageId)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ 
      message: 'Error sending email',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    })
  }
}
