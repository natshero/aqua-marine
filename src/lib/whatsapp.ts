export function createWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
