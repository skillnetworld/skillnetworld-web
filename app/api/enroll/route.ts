import Courses from "@/app/pages/courses/Course";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, Name, phone, title } = await req.json();
    console.log("Received enrollment data:", { email, Name, phone, title });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 
      },
    });

    await transporter.sendMail({
      from: `"NILET Course" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Enrollment Confirmation - ${Name}`,
      text: `Thank you for enrolling in the courses${title}. Your details are here: Name - ${Name}, Phone - ${phone}. My team will contact you soon!`,
    });

    
    await transporter.sendMail({
      from: `"NILET Course" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enrollment - ${title}`,
      text: `A new student has enrolled in ${title}. Details: Name - ${Name}, Email - ${email}, Phone - ${phone}.`,
    });
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
