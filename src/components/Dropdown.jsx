export default function Language_Selector() {
  return (
    <>
      <select
        id="language"
        class="  h-8 w-28 rounded border border-gray-500 bg-transparent text-center text-sm  font-black  text-white focus:border-transparent  focus:outline-offset-4 focus:ring-1 focus:ring-white"
      >
        <option value="EN"> English</option>
        <option value="HI">Hindi</option>
      </select>
    </>
  );
}
