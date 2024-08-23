import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: Request) {

	const data = await req.json()

	if (!data.phone) {
		return NextResponse.json({ error: 'Missing phone number' }, { status: 500 })
	}

	try {
		if (process.env.TWILIO_VERIFY_SERVICE) {
			const verification = await client.verify.v2
									.services(process.env.TWILIO_VERIFY_SERVICE)
									.verifications
									.create({to: data.phone, channel: 'sms'});
		
			return NextResponse.json(verification)
		}
		return NextResponse.json({ error: 'Missing verification service' }, { status: 500 })
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error }, { status: 500 })
	}

}