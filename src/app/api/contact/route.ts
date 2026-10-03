import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, celular, periodo, mensagem } = await request.json();

    if (!nome || !email || !celular || !mensagem) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "Clínica Benvenuti <onboarding@resend.dev>",
      to: ["benvenutipsicologiaesaude@gmail.com"],
      subject: `Novo Contato pelo Site - ${nome}`,
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular}</p>
        <p><strong>Melhor Período:</strong> ${periodo}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Erro ao enviar e-mail." },
      { status: 500 },
    );
  }
}
