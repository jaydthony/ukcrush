import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <h6 className="border-r-2 border-gray-500 pr-2">Languages</h6>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Deutsch</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">English</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Español</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Suomi</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Français</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Italiano</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">日本語</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">한국어</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Dutch</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Norsk</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Português</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Română</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Русский</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Svenska</Link>
        </div>
      </div>
      <div className="flex gap-2 justify-center mb-6">
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Terms & Conditions</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Blog</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Privacy & Cookies</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Terms & Conditions</Link>
        </div>
        <div className="border-r-2 border-gray-500 pr-2">
          <Link href="/">Email</Link>
        </div>
      </div>
      <div className="text-center">
        <p>
          <small>
            The owners and operators of this Website are not the primary
            producer (as that term is defined in 18 USC section 2257) of any of
            the visual content contained in the Website. The original records
            required <br /> pursuant to 18 U.S.C. section 2257 and 28 C.F.R. 75
            for materials contained in the website are kept by the appropriate
            Custodian of Records as follows:
          </small>
        </p>
        <p>
          <small>
            HELLO WORLD SAS, 128 rue de la Boetie, 75008 Paris, France
          </small>
        </p>
        <p className="mt-3">
          <small>Copyright © LuckyCrush 2023</small>
        </p>
      </div>
    </div>
  );
}
