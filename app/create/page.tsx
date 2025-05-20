import URL_Form from "@/components/URL_Form";

export default function create() {



    return (
      <div className="flex items-center bg-slate-100 h-screen justify-center">
        <div className="border rounded-xl w-96 border-slate-200 bg-white py-10 px-5 gap-4 ">
            <URL_Form />          
        </div>
      </div>
    );
}