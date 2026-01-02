function getWhatsApp(numero: string, desc: string): void {
  window.open(
    `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      desc,
    )}`,
    "_blank",
  );
}
function getEmail(email: string, subject: string, body: string): void {
  const url = `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

const UtilServices = {
  getWhatsApp(numero: string, desc: string): void {
    return getWhatsApp(numero, desc);
  },
  getEmail(email: string, subject: string, body: string): void {
    return getEmail(email, subject, body);
  },
};

export default UtilServices;
