const FEATURES = [
  {
    title: "Verified Specs",
    body: "Every datasheet and pinout reviewed by hardware engineers before it ships.",
  },
  {
    title: "Global Shipping",
    body: "Tracked, insured, and packaged in anti-static bags. Worldwide in 3-5 days.",
  },
  {
    title: "Returns, Unfiltered",
    body: "30 days, no restocking fees, no robotic CS scripts. If it doesn't work, you don't pay.",
  },
  {
    title: "For Makers",
    body: "We started this store because we couldn't find the parts we wanted. Now we sell them.",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="border-b-2 border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
          Why
          <br />
          ECHO.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`p-6 sm:p-8 ${
                i > 0 ? "border-t-2 sm:border-t-0 sm:border-l-2 border-border" : ""
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-3">
                {feat.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">{feat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
