
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useEffect } from "react";

interface BrevoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrevoFormPopup = ({ isOpen, onClose }: BrevoFormPopupProps) => {
  useEffect(() => {
    // Add Brevo scripts when the component mounts
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    
    // Only add the script once
    if (!document.querySelector('script[src="https://sibforms.com/forms/end-form/build/main.js"]')) {
      document.body.appendChild(script);
    }

    // Setup required variables for Brevo
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Leider sind die bereitgestellten Infos ungültig";
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
    window.GENERIC_INVALID_MESSAGE = "Leider sind die bereitgestellten Infos ungültig";
    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
      }
    };
    window.AUTOHIDE = Boolean(0);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 max-w-[580px] border-none bg-transparent">
        <div className="sib-form" style={{ textAlign: "center" }}>
          <div id="sib-form-container" className="sib-form-container">
            <div id="error-message" className="sib-form-message-panel" style={{ fontSize: "16px", textAlign: "center", fontFamily: "Helvetica, sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949", maxWidth: "540px", margin: "0 auto" }}>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Bitte nochmal versuchen
                </span>
              </div>
            </div>
            <div></div>
            <div id="success-message" className="sib-form-message-panel" style={{ fontSize: "16px", textAlign: "center", fontFamily: "Helvetica, sans-serif", color: "#085229", backgroundColor: "#e7faf0", borderRadius: "3px", borderColor: "#13ce66", maxWidth: "540px", margin: "0 auto" }}>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Das war der erste Schritt. Wir melden uns zeitnah bei dir
                </span>
              </div>
            </div>
            <div></div>
            <div id="sib-container" className="sib-container--large sib-container--vertical relative" style={{ textAlign: "center", backgroundColor: "rgba(255,255,255,1)", maxWidth: "540px", borderRadius: "3px", borderWidth: "1px", borderColor: "#C0CCD9", borderStyle: "solid", direction: "ltr", margin: "0 auto" }}>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              
              <form id="sib-form" method="POST" action="https://sibforms.com/serve/MUIFAJ_DcxJlvRD3psRVx2nDGNe2zYivbNrzs3_y_FJfTjM-wKiJDkVmebrGnMcOU4bBTRIOoCStBnk0pI2mwibEI-QLGkze73zvN0mzQlpC5p7yGWlIRc7S4WpRnMOknyl-wanGlvGGmUMnEa0zbSsKEL-ygR43D1uTXvrZYkF_Olmhv2vo5PUDda4qusHFvYGmFoq2oi49A8G3" data-type="subscription">
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form-block text-center" style={{ fontSize: "32px", fontWeight: 700, fontFamily: "Helvetica, sans-serif", color: "#3C4858", backgroundColor: "transparent" }}>
                    <p>Fülle das Formular aus und erstelle dein kostenloses Konto</p>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-form-block text-center" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", color: "#3C4858", backgroundColor: "transparent" }}>
                    <div className="sib-text-form-block">
                      <p><br /></p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row flex flex-col items-center">
                        <label className="entry__label mx-auto text-center" style={{ fontWeight: 700, fontSize: "16px", fontFamily: "Helvetica, sans-serif", color: "#3c4858" }} htmlFor="EMAIL" data-required="*">Trage deine E-Mail ein und starte in Kürze</label>
                        <div className="entry__field w-3/4 mx-auto mt-2">
                          <input className="input w-full" type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="EMAIL" data-required="true" required />
                        </div>
                      </div>
                      <label className="entry__error entry__error--primary mx-auto text-center" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", color: "#661d1d", backgroundColor: "#ffeded", borderRadius: "3px", borderColor: "#ff4949" }}>
                      </label>
                      <div className="flex justify-center w-full">
                        <label className="entry__specification text-center w-3/4" style={{ fontSize: "12px", fontFamily: "Helvetica, sans-serif", color: "#8390A4" }}>
                          In Kürze erhältst du von uns weitere Infos und den Registrierungslink
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "8px 0" }} className="flex justify-center">
                  <div className="sib-form-block mx-auto" style={{ textAlign: "center" }}>
<button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Helvetica, sans-serif", color: "#FFFFFF", backgroundColor: "#a4c309", borderRadius: "3px", borderWidth: "0px", padding: "8px 16px" }} form="sib-form" type="submit"   onClick={() => gtag_report_conversion()}>                      <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                      </svg>
                      Jetzt registrieren
                    </button>
                  </div>
                </div>
                <input type="text" name="email_address_check" value="" className="input--hidden" />
                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrevoFormPopup;
