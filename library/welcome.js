const { WelcomeLeave } = require("canvafy");

async function welcomeBanner(avatar, name, subject, type) {

    const title = name;

    const desc = (type === "welcome" ? "Selamat datang di " : "Telah keluar dari grup ") + subject;

    const background = "https://img1.pixhost.to/images/8522/638332795_kayzennotdev.jpg";

    const welcome = await new WelcomeLeave()

        .setAvatar(avatar)

        .setBackground("image", background) // ✅ fix

        .setTitle(title.length > 20 ? (title.substring(0, 16) + "..") : title)

        .setDescription(desc.length > 70 ? (desc.substring(0, 65) + "..") : desc)

        .setBorder("#2a2e35")

        .setAvatarBorder("#2a2e35")

        .setOverlayOpacity(0.1)

        .build();

    return welcome;

}

async function promoteBanner(avatar, name, type) {

    const title = name;

    const desc = type === "promote" ? "Telah menjadi admin" : "Telah diberhentikan menjadi admin";

    const background = "https://img1.pixhost.to/images/8522/638332795_kayzennotdev.jpg";

    const welcome = await new WelcomeLeave()

        .setAvatar(avatar)

        .setBackground("image", background) // ✅ fix

        .setTitle(title.length > 20 ? (title.substring(0, 16) + "..") : title)

        .setDescription(desc.length > 70 ? (desc.substring(0, 65) + "..") : desc)

        .setBorder("#2a2e35")

        .setAvatarBorder("#2a2e35")

        .setOverlayOpacity(0.1)

        .build();

    return welcome;

}

module.exports = { welcomeBanner, promoteBanner };