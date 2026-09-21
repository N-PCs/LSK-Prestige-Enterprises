import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, X, ExternalLink } from 'lucide-react';

interface ContactModalContextType {
  isOpen: boolean;
  modalTitle: string;
  openContactModal: (title?: string) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined,
);

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      'useContactModal must be used within a ContactModalProvider',
    );
  }
  return context;
};

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Inquire Directly');

  const openContactModal = useCallback((title?: string) => {
    if (title) {
      setModalTitle(title);
    } else {
      setModalTitle('Inquire Directly');
    }
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeContactModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, closeContactModal]);

  return (
    <ContactModalContext.Provider
      value={{ isOpen, modalTitle, openContactModal, closeContactModal }}
    >
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
};

export const ContactModal: React.FC = () => {
  const { isOpen, modalTitle, closeContactModal } = useContactModal();

  const phoneNumber = '+91 95034 11509';
  const telLink = 'tel:+919503411509';
  const emailAddress = 'carvalhoestatespvt.ltd@gmail.com';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `${modalTitle} - Carvalho Estates`,
  )}`;
  const whatsappLink = `https://wa.me/919503411509?text=${encodeURIComponent(
    `Hi Carvalho Estates, I would like to inquire about ${modalTitle.toLowerCase()}.`,
  )}`;
  const mapsLink =
    'https://maps.google.com/?q=CARVALHO+ESTATES+MIDAS+TOUCH+BUILDING+SPDA+GROUND+MARGAO+Goa+India';

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            onClick={closeContactModal}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 shadow-2xl z-10 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative accent bar */}
            <div className="h-1 w-full bg-[#D25442]"></div>

            {/* Close Button */}
            <button
              onClick={closeContactModal}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-gray-400 hover:text-black dark:hover:text-white p-2 transition-colors rounded-none group"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
            </button>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6 pr-6 text-left">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#E06A55] block mb-2">
                  CARVALHO ESTATES • CONCIERGE
                </span>
                <h3
                  id="contact-modal-title"
                  className="font-display text-2xl sm:text-3xl text-black dark:text-white font-medium tracking-tight"
                >
                  {modalTitle}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                  Connect with our private advisory team through your preferred
                  channel.
                </p>
              </div>

              {/* Action Channels List */}
              <div className="space-y-3">
                {/* 1. Phone Call */}
                <a
                  href={telLink}
                  className="group flex items-center justify-between p-3.5 sm:p-4 bg-gray-50 dark:bg-[#1a1a1a] hover:bg-[#D25442]/10 dark:hover:bg-[#D25442]/15 border border-gray-100 dark:border-gray-800 hover:border-[#D25442]/40 transition-all text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#D25442]/10 text-[#D25442] flex items-center justify-center shrink-0 group-hover:bg-[#D25442] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-400">
                        Direct Line / Phone
                      </div>
                      <div className="text-sm sm:text-base font-medium text-black dark:text-white group-hover:text-[#D25442] transition-colors truncate">
                        {phoneNumber}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 ml-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D25442] bg-[#D25442]/10 px-2.5 py-1">
                    Call
                  </span>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 bg-gray-50 dark:bg-[#1a1a1a] hover:bg-emerald-500/10 dark:hover:bg-emerald-500/15 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/40 transition-all text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12.012 2c-5.508 0-9.988 4.479-9.988 9.987 0 1.758.455 3.414 1.324 4.872L2 22l5.28-1.354c1.417.771 3.014 1.18 4.73 1.18 5.51 0 9.99-4.478 9.99-9.986S17.522 2 12.012 2zm6.604 14.168c-.273.766-1.352 1.397-2.185 1.577-.565.122-1.306.22-3.805-.813-3.195-1.32-5.253-4.57-5.413-4.784-.16-.214-1.28-1.704-1.28-3.253 0-1.549.813-2.31 1.106-2.617.293-.307.64-.384.853-.384.213 0 .427.004.614.013.193.01.454-.073.71.54.267.639.907 2.212.986 2.372.079.16.133.347.027.56-.107.213-.16.347-.32.533-.16.186-.337.413-.48.56-.16.16-.328.334-.142.653.187.32.83 1.36 1.777 2.203.118.105.215.158.33.158.114 0 .227-.053.341-.144.25-.198 1.092-1.28 1.385-1.68.293-.4.587-.333.987-.187.4.146 2.534 1.196 2.667 1.263.133.066.222.099.253.153.031.053.031.307-.08.673z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-400">
                        WhatsApp Concierge
                      </div>
                      <div className="text-sm sm:text-base font-medium text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                        {phoneNumber}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 ml-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 flex items-center gap-1">
                    Chat
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                {/* 3. Email */}
                <a
                  href={mailtoLink}
                  className="group flex items-center justify-between p-3.5 sm:p-4 bg-gray-50 dark:bg-[#1a1a1a] hover:bg-[#D25442]/10 dark:hover:bg-[#D25442]/15 border border-gray-100 dark:border-gray-800 hover:border-[#D25442]/40 transition-all text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#D25442]/10 text-[#D25442] flex items-center justify-center shrink-0 group-hover:bg-[#D25442] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-400">
                        Email Advisory
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-black dark:text-white group-hover:text-[#D25442] transition-colors truncate">
                        {emailAddress}
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 ml-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D25442] bg-[#D25442]/10 px-2.5 py-1">
                    Email
                  </span>
                </a>

                {/* 4. Office Address */}
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between p-3.5 sm:p-4 bg-gray-50 dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#222222] border border-gray-100 dark:border-gray-800 transition-all text-left"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D25442] group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-400">
                        Office Location
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed mt-0.5">
                        CARVALHO ESTATES, Shop No 3, First Floor, Midas Touch
                        Building, SPDA Ground, Margao, Goa, India
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 ml-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 dark:text-gray-400 bg-gray-200/60 dark:bg-gray-800 px-2.5 py-1 flex items-center gap-1 mt-1">
                    Map
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>

              {/* Modal Footer Note */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                  Available Monday – Saturday, 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
