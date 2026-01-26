"use client";
import { useToast } from '@/src/context/ToastContext';

export default function ToastMessage() {
    const { toast, hideToast } = useToast();

    return (
        <section role="status" aria-live="polite" className='fixed top-20 left-0 right-0 z-50 flex items-center justify-center toast_container'>
            {/* success message */}
            <div id="toast-success" className="flex items-center w-full max-w-80 p-4 pb-6 bg-white border border-borderColor rounded-xl shadow relative">
                {toast?.type === "success" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-successIcon bg-successButton/10 rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></svg>
                        <span className="sr-only">message square icon</span>
                    </div>
                )}

                {toast?.type === "warning" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-[#f97316] bg-[#FDFDEA] rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="M12 15h.01" /><path d="M12 7v4" /></svg>
                        <span className="sr-only">message square warning icon</span>
                    </div>
                )}

                {toast?.type === "error" && (
                    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-red-500 bg-red-500/10 rounded">
                        <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="m14.5 8.5-5 5" /><path d="m9.5 8.5 5 5" /></svg>
                        <span className="sr-only">message square x icon</span>
                    </div>
                )}

                <div className="ms-3 text-sm font-normal">{toast?.message}</div>

                <button type="button" onClick={(e) => { e.preventDefault(); hideToast(); }} className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border hover:bg-border2Color/10 font-medium rounded text-sm h-8 w-8 cursor-pointer" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" aria-hidden="true" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                </button>

                <div className="flex items-center absolute left-4 right-5 bottom-3">
                    <div className={`w-full ${toast?.type === "success" ? "bg-successIcon/10" : toast?.type === "warning" ? "bg-[#FDFDEA]" : "bg-red-500/10"} rounded-full h-1.5`}>
                        <div className={`${toast?.type === "success" ? "bg-successIcon" : toast?.type === "warning" ? "bg-[#f97316]" : "bg-red-500"} progress-line-animation`} />
                    </div>
                </div>
            </div>
        </section>
    )
};