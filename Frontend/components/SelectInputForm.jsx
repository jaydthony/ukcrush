import Link from "next/link";

export default function SelectInputForm() {
  return (
    <div className="py-3 border-b-2">
      <select class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        <option class="py-1 px-2 text-base text-gray-700">Deutsch</option>
        <option class="py-1 px-2 text-base text-gray-700">English</option>

        <option class="py-1 px-2 text-base text-gray-700">Español</option>
        <option class="py-1 px-2 text-base text-gray-700">Suomi</option>

        <option class="py-1 px-2 text-base text-gray-700">Français</option>
        <option class="py-1 px-2 text-base text-gray-700">Italiano</option>

        <option class="py-1 px-2 text-base text-gray-700">日本語</option>
        <option class="py-1 px-2 text-base text-gray-700">한국어</option>

        <option class="py-1 px-2 text-base text-gray-700">Dutch</option>
        <option class="py-1 px-2 text-base text-gray-700">Norsk</option>

        <option class="py-1 px-2 text-base text-gray-700">Português</option>
        <option class="py-1 px-2 text-base text-gray-700">Română</option>

        <option class="py-1 px-2 text-base text-gray-700">Русский</option>
        <option class="py-1 px-2 text-base text-gray-700">Svenska</option>
      </select>
    </div>
  );
}
