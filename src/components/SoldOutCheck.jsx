function SoldOutCheck() {
  return (
    <div className="flex items-center pt-5">
      <label className="flex items-center gap-2 cursor-pointer select-none text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          className="w-4 h-4 rounded text-black focus:ring-black border-gray-300"
        />
        Show sold out
      </label>
    </div>
  );
}

export default SoldOutCheck;
