const pad = (value: number) => String(value).padStart(2, "0");

/**
 * A recorded take as a file named after its date, "vocal-20261005-153012.webm", with the extension of the recorded
 * mime type (webm/opus on Chrome and Firefox, mp4 on Safari).
 */
const createVoiceFile = (audio: Blob, date = new Date()): File => {
  const extension = audio.type.split(";")[0].split("/")[1]?.replace(/^x-/, "") || "webm";
  const day = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  const time = `${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;

  return new File([audio], `vocal-${day}-${time}.${extension}`, { type: audio.type });
};

export default createVoiceFile;
