
import docIlustration from "../assets/images/doc-ilustration.png";

export default function EmptyState() {

    return (
        <div className="flex w-full h-full justify-center items-start ">
            <span className="bg-white rounded-2xl border-1 border-gray-200 m-2 p-6 shadow-xl">
                <h1 className="text-center text-[28px] font-bold leading-tight">NOT FOUND</h1>
                <p className="text-center text-zinc-500 text-[20px] font-medium leading-tight">The requested page does not contain data</p>
                {docIlustration && <img src={docIlustration} alt="Empty State Illustration" className="w-full h-full object-cover mx-auto p-4" />}
            </span>
        </div>
    );
}
