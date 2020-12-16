function getNewOrderMail(order) {
  const { id_string, place, name, email, phone, cpf, city, church } = order;
  console.log(order);

  let mail = {
    from: '"UMIC Brasil" <mailer.umicbrasil@gmail.com>',
    replyTo: "umicbrasil@gmail.com",
    to: `umicbrasil@gmail.com, ${email}`,
    subject: `COMIC 2021 | Pedido #${id_string}`,
    html: `<div style="background-color:#f1f1f1;min-width:600px;padding:0;margin:0"><table width="100%" style="background-color:#f1f1f1;min-width:600px"><tbody><tr><td align="center" valign="top" width="100%" style="min-width:600px"><center><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" bgcolor="#f1f1f1"><tbody><tr><td align="center"><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr height="20"><td width="100%" height="20" style="line-height:1px;font-size:1px"> &nbsp;<\/td><\/tr><tr><td align="center"><table border="0" cellpadding="0" cellspacing="0" style="min-width:600px"><tbody><tr><td valign="middle" align="center"><div style="max-height:50px"><div><a><img align="none" alt="Logo COMIC 2021 Vocação" border="0" hspace="0" src="https://i.imgur.com/BXZTJxj.png" style="max-width:250px;height:auto;display:block;margin:0px" title="COMIC 2021 VOCAÇÃO" vspace="0"></a><\/div><\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="560" border="0" cellpadding="0" cellspacing="0" style="min-width:560px"><tbody><tr height="50"><td width="100%" height="50" style="line-height:1px;font-size:1px">&nbsp;<\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0" bgcolor="#f1f1f1"><tbody><tr><td align="center"><table width="600" style="min-width:600px;background-color:#ffffff" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="560" border="0" cellpadding="0" cellspacing="0" style="min-width:560px"><tbody><tr height="30"><td width="100%" height="30" style="line-height:1px;font-size:1px">&nbsp; <\/td><\/tr><tr><td width="560" align="center" style="font-family:arial,helvetica,sans-serif;font-size:16px;color:#313131;text-align:left;line-height:24px"><div style="text-align:center;line-height:24px"><span style="font-size:18px"><strong>Olá ${name}!</strong></span><br>Recebemos seu pedido, obrigado! <br><br><span style="font-size:32px;"><strong>PEDIDO #${id_string}</strong></span><br><br><\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family:arial,helvetica,sans-serif;text-transform:uppercase;font-size:14px;color:#b2b2b2;text-align:left;line-height:24px"><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#b2b2b2;text-align:left"><strong>SUAS INFORMAÇÕES</strong><\/div><\/td><\/tr><tr height="1"><td width="100%" height="1" style="line-height:1px;font-size:1px;background-color:#e2e3e4"> &nbsp;<\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr height="15"><td width="100%" height="15" style="line-height:1px;font-size:1px"> &nbsp; <\/td><\/tr><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><table align="left" border="0" cellpadding="0" cellspacing="0" width="270" style="min-width:270px;margin-bottom:12px"><tbody><tr><td align="center"><div style="font-family:Ariel,sans-serif;font-size:16px;color:#313131;text-align:left;line-height:24px"><strong>Nome</strong><br>${name}<br><br><strong>CPF</strong><br>${cpf}<br><br><strong>Igreja</strong><br>${church}<br><\/div><\/td><\/tr></tbody></table><table align="right" border="0" cellpadding="0" cellspacing="0" width="270" style="min-width:270px"><tbody><tr><td align="center"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:16px;color:#313131;text-align:left;line-height:24px"><strong>Email</strong><br>${email}<br><br><strong>Telefone</strong><br>${phone}<br><br><strong>Cidade</strong><br>${city}<br><\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr height="15"><td width="100%" height="15" style="line-height:1px;font-size:1px"> &nbsp; <\/td><\/tr><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family:arial,helvetica,sans-serif;text-transform:uppercase;font-size:14px;color:#b2b2b2;text-align:left;line-height:24px"><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#b2b2b2;text-align:left"><strong>SEU PEDIDO</strong><\/div><\/td><\/tr><tr height="1"><td width="100%" height="1" style="line-height:1px;font-size:1px;background-color:#e2e3e4"> &nbsp;<\/td><\/tr></tbody></table><table width="540" border="0" bgcolor="#f1f1f1" cellspacing="0" cellpadding="0" style="min-width:540px;background-color:#f1f1f1"><tbody><tr><td align="center"><table width="520" border="0" cellspacing="0" cellpadding="0"><tbody><tr height="10"><td width="100%" height="10" style="line-height:1px;font-size:1px"> &nbsp;<\/td><\/tr><tr><td align="center"><table align="left" width="260" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#313131;text-align:left"><strong>Ingresso</strong><\/div><\/td><\/tr></tbody></table><table align="left" width="140" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#313131;text-align:left"><strong>Local</strong><\/div><\/td><\/tr></tbody></table><table align="right" width="80" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#313131;text-align:right"><strong>Preço</strong><\/div><\/td><\/tr></tbody></table><\/td><\/tr><tr height="10"><td width="100%" height="10" style="line-height:1px;font-size:1px"> &nbsp;<\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr height="8"><td width="100%" height="8" style="line-height:1px;font-size:1px"> &nbsp;<\/td><\/tr><tr><td align="center"><table width="520" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%"><tbody><tr><td align="center" width="220px" style="min-width:220px"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:14px;color:#313131;text-align:left;line-height:20px;word-break:break-all;padding:5px 5px 5px 0"> COMIC 2021 - Ingresso #${id_string}<\/div><\/td><td align="center" width="140" style="min-width:140px"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:14px;color:#313131;text-align:left;line-height:20px;word-break:break-all;padding:5px 5px 5px 0"> ${place}<\/div><\/td><td align="center" width="80" style="min-width:80px"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:14px;color:#313131;text-align:right;line-height:20px;word-break:break-all;padding:5px 0 5px 0"> R$ 50,00 <\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr><tr height="12"><\/tr><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr height="1"><td width="100%" style="line-height:1px;font-size:1px;background-color:#e2e3e4"> &nbsp;<\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr><td align="center"><table width="520" border="0" cellspacing="0" cellpadding="0"><tbody><tr height="12"><\/tr><tr><td align="center"><table align="left" width="412px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><div style="font-family:Ariel,Helvetica,sans-serif;font-weight:bold;text-transform:uppercase;font-size:14px;color:#b2b2b2;text-align:right;line-height:26px"> TOTAL:<br><\/div><\/td><\/tr></tbody></table><table align="right" width="80px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><div style="font-family:Ariel,sans-serif;font-size:14px;color:#313131;text-align:right;line-height:26px"><b>R$ 50,00</b><br><\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="min-width:600px;background-color:#ffffff"><tbody><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family:arial,helvetica,sans-serif;text-transform:uppercase;font-size:14px;color:#b2b2b2;text-align:left;line-height:24px"><div style="font-family:arial,helvetica,sans-serif;font-size:14px;color:#b2b2b2;text-align:left"><strong>INSTRUÇÕES DE PAGAMENTO</strong><\/div><\/td><\/tr><tr height="1"><td width="100%" height="1" style="line-height:1px;font-size:1px;background-color:#e2e3e4"> &nbsp;<\/td><\/tr><tr height="15"><td width="100%" height="15" style="line-height:1px;font-size:1px">&nbsp; <\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" style="min-width:600px;background-color:#ffffff"><tbody><tr><td align="center"><table width="540" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="center"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:14px;color:#313131;text-align:center;line-height:22px;width:540px"><strong>LEIA COM ATENÇÃO AS INFORMAÇÕES ABAIXO:</strong><\/p><p>Após pagamento, os valores não poderão ser reembolsados. Caso o evento não possa ser realizado por motivo de força maior, será marcado para data posterior. <\/p><p>Pedidos sem pagamento poderão ser cancelados. Esse email não garante sua vaga, apenas após a confirmação de pagamento.<\/p><p>Segue abaixo as instruções de pagamento. No momento, as formas de pagamento disponíveis são: Transferência bancária (TED, DOC ou PIX) e Depósito bancário.<\/p><p>Após pagamento, enviar o número do pedido (ou dos pedidos, caso haja o pagamento de mais de um pedido de uma vez) e o comprovante para <a href="mailto:umicbrasil@gmail.com">umicbrasil@gmail.com</a><\/p><\/div><\/td><\/tr><tr height="20"><td width="100%" height="20" style="line-height:1px;font-size:1px">&nbsp; <\/td><\/tr><tr height="1"><td width="100%" height="1" style="line-height:1px;font-size:1px;background-color:#e2e3e4"> &nbsp;<\/td><\/tr><tr height="16"><\/tr><tr><td align="center"><div style="font-family:Ariel,Helvetica,sans-serif;font-size:14px;color:#313131;text-align:center;line-height:22px"><strong>DADOS DA CONTA PARA PAGAMENTO</strong><br>CONCÍLIO MIN IGREJAS CRISTO BRAS<br>BANCO: CAIXA ECONÔMICA FEDERAL<br>AGÊNCIA: 3494 - CONTA CORRENTE: 3333-2 (OP: 003)<br>CNPJ: 00.643.841/0001-17<br>PIX: umicbrasil@gmail.com<br><\/div><\/td><\/tr><tr height="22"><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><table width="100%" style="min-width:600px" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" style="min-width:600px"><tbody><tr height="18"><\/tr><tr><td align="center"><table width="560" border="0" cellpadding="0" cellspacing="0" style="min-width:560px"><tbody><tr><td align="center"><div style="font-family:ariel,sans-serif;font-weight:bold;font-size:14px;color:#313131;text-align:center;line-height:26px"> Dúvidas? <a style="text-decoration:none;color:#2222ff" href="mailto:umicbrasil@gmail.com">umicbrasil@gmail.com</a><br><\/div><\/td><\/tr><tr height="12"><\/tr><tr><td align="center"><div style="font-family:ariel,sans-serif;font-size:12px;color:#858585;text-align:center;line-height:20px;margin-bottom:12px"><p>© 2020 UMIC Brasil<\/p><\/div><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table><\/td><\/tr></tbody></table></center><\/td><\/tr></tbody></table></div>`,
  };

  return mail;
}

module.exports = { getNewOrderMail };
