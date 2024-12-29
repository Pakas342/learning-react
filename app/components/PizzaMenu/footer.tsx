const SERVICE_HOURS = {
  oppening: 11,
  closing: 22
};
export default function Footer() {
  const currentDate = new Date().getHours();
  return (

    <div className="footer">
      <p>{currentDate > SERVICE_HOURS.oppening && currentDate < SERVICE_HOURS.closing
        ? "We're open!"
        : "Sorry, we're close :("}</p>
    </div>
  )
}
