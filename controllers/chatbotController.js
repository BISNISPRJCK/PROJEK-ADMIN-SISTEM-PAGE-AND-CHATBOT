export const getChatPage = (req, res) => {
  res.render("chatbot");
};

export const chatWithBot = async (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let botReply = "Maaf, saya tidak mengerti pertanyaan kamu.";

  if (userMessage.includes("halo") || userMessage.includes("hai")) {
    botReply = "Halo juga! Ada yang bisa saya bantu?";
  } else if (userMessage.includes("siapa kamu") || userMessage.includes("siapa nama kamu")) {
    botReply = "Saya adalah chatbot buatan kamu sendiri! 🤖";
  } else if (userMessage.includes("terima kasih")) {
    botReply = "Sama-sama! 😊";
  } else if (userMessage.includes("nama saya")) {
    const nama = userMessage.split("nama saya")[1]?.trim().split(" ")[0];
    botReply = `Hai ${nama}, senang bertemu denganmu!`;
  } else if (userMessage.includes("umur kamu")) {
    botReply = "Saya masih muda, baru dibuat beberapa menit lalu 😄";
  } else if (userMessage.includes("cuaca")) {
    botReply = "Saya belum bisa mengecek cuaca. Tapi semoga harimu cerah! 🌤️";
  }

  res.json({ reply: botReply });
};
