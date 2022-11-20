function DateOfToday() {
  const todaySdate = Date();

  return (
    <h1 className="flex items-center flex-col gap-6 font-semibold">
      Today's date: {todaySdate}!
    </h1>
  );
}
export default DateOfToday;
