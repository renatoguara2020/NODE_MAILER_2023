const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get("/send-email", async (req, res) => {

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f89f5c5f65af3d",
            pass: "429e9067f12779"
        }
    });

    var message = {
        from: "noreplay@celke.com.br",
        to: "cesar@celke.com.br",
        subject: "Instrução para recuperar a senha",
        text: "Prezado(a) Cesar. \n\nVocê solicitou alteração de senha.\n\n",
        html: "Prezado(a) Cesar. <br><br>Você solicitou alteração de senha.<br><br>"
    };

    transport.sendMail(message, function (err) {
        if (err) return res.status(400).json({
            erro: true,
            mensagem: "Erro: E-mail não enviado com sucesso!"
        });
    });

    return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!"
    });

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});