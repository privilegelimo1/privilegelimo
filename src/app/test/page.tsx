import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fleet = [
    "Mercedes-Benz S-Class",
    "Lexus ES",
    "Cadillac Escalade"
];

function MiniCard({tag, title, children}: {tag: string; title: string; Children: React.ReactNode }) {
    return (
        <div className="group rounded-[1.75rem] border border-[#efefef] bg-white p-7 md:p-8 shadow-[0_2px_16px_rgba90,0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#e8d9a0] transition-all duration-300 hover:-translate-y-0.5">
            <span className="text-[9px] tracking-[0.45em] uppercase text-[#ab5461] mb-3 block font-light">
                {tag}
            </span>
            <h3 className="text-base md:text-lg font-light text-[#0a0a0a] mb-4 tracking-tight leading-snug">
                {title}
            </h3>
            <div className="text-[#7a7a7a] text-sm font-light leading-relaxed space-y-3">
                {children}
            </div>
        </div>
    );
}
export default function WhyUsPage() {
    return (
        <main className="bg-white">
            <Navbar />
        </main>

        {/* –– Hero ––*/}
        <section className="pt-40 pb-28 border-b border-[#efefef]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-12">
                    <Link href="/" className="text-[10px] tracking-[0.3.em] uppercase text-[#9a9a9a] transition-colors">
                    Home
                    </Link>
                    <span className="text-[#d5d5d5]"></span>
                    <span className="text-[10px] tracking-[0.03] uppercase text-[#0a0a0a]">Why Us</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end"></div>
            </div>

            <div className="grid frid-cols-1 lg:grid-cols-2 gap-20 items-end">
                <div>
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="h-px w-8 bg-[#ab5641]"/>
                        <span className="text-[#ab5461] text-[10px] tracking-[0.5em] uppercase font-light">
                            Privilege Luxury Travel LLC
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-[68px] font-extralight text-[#0a0a0a] leading-[1.04] tracking-tight mb-6">
                        Redefining
                        <br/>
                        <span className="text-[#ab5461] italic font-extralight">
                            <br/>
                            Services in Dubai
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    )
}