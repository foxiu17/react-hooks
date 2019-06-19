const timeConverter = (timestamp) => {
  const a = new Date(parseInt(timestamp, 10));
  const year = a.getFullYear();
  const month = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1).toString() : a.getMonth() + 1;

  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
  const sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
  return `${date}.${month}.${year}, ${hour}:${min}:${sec}`;
}

export default timeConverter;
