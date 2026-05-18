import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Other Union Territory",
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    neetAttemptNo: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Auto-close dropdown if user clicks away
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateSelect = (stateName) => {
    setFormData({ ...formData, state: stateName });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.state) {
      alert("Please select your State.");
      return;
    }
    setLoading(true);

    const telegramLink = "https://t.me/+AkF3PHm7mI43ZjRl";

    try {
      const response = await axios.post(
        "https://sushilformwebsite.onrender.com/api/users/submit",
        formData,
      );
      if (response.data.success) {
        window.location.href = telegramLink;
      }
    } catch (error) {
      window.location.href = telegramLink;
      setLoading(false);
    }
  };

  return (
    // Locked h-screen with overflow-hidden ensures a true single-page app view with no scrollbars
    <div className="w-full h-screen bg-yellow-400 flex items-center justify-center p-3 sm:p-6 font-sans select-none overflow-hidden relative">
      {/* --- RESPONSIVE NEO-BRUTALIST CARD --- */}
      <div className="bg-white border-4 border-black p-5 sm:p-8 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm sm:max-w-md max-h-[96vh] flex flex-col justify-center">
        {/* Form Header with ultra-tight spacing */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tighter leading-none">
            Join the batch.
          </h2>
          <p className="text-black font-bold text-[10px] sm:text-xs mt-1.5 bg-yellow-300 inline-block px-2.5 py-1 rounded-md border-2 border-black uppercase tracking-wide">
            Lock in your 1:1 mentorship space
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-[10px] sm:text-xs font-black text-black uppercase tracking-wider mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-3.5 py-2 sm:py-3 bg-white border-3 border-black rounded-xl font-bold text-black focus:outline-none focus:bg-yellow-50/40 text-xs sm:text-sm placeholder-black/30"
              placeholder="e.g. Aman Verma"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-[10px] sm:text-xs font-black text-black uppercase tracking-wider mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNo"
              required
              onChange={handleChange}
              className="w-full px-3.5 py-2 sm:py-3 bg-white border-3 border-black rounded-xl font-bold text-black focus:outline-none focus:bg-yellow-50/40 text-xs sm:text-sm placeholder-black/30"
              placeholder="e.g. 9876543210"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[10px] sm:text-xs font-black text-black uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-3.5 py-2 sm:py-3 bg-white border-3 border-black rounded-xl font-bold text-black focus:outline-none focus:bg-yellow-50/40 text-xs sm:text-sm placeholder-black/30"
              placeholder="aman@example.com"
            />
          </div>

          {/* Split Row for Attempt and State */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-black text-black uppercase tracking-wider mb-1 truncate">
                NEET Attempt Number
              </label>
              <input
                type="number"
                name="neetAttemptNo"
                min="1"
                required
                onChange={handleChange}
                className="w-full px-3.5 py-2 sm:py-3 bg-white border-3 border-black rounded-xl font-bold text-black focus:outline-none focus:bg-yellow-50/40 text-xs sm:text-sm placeholder-black/30"
                placeholder="e.g. 1"
              />
            </div>

            {/* Custom State Dropdown Component */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-[10px] sm:text-xs font-black text-black uppercase tracking-wider mb-1">
                State
              </label>

              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full pl-3.5 pr-7 py-2 sm:py-3 bg-white border-3 border-black rounded-xl font-bold text-black text-xs sm:text-sm cursor-pointer flex justify-between items-center selection:bg-transparent h-[38px] sm:h-[46px]"
              >
                <span
                  className={
                    formData.state
                      ? "text-black truncate"
                      : "text-black/30 truncate"
                  }
                >
                  {formData.state || "Select"}
                </span>

                <svg
                  className={`w-3.5 h-3.5 stroke-[3px] transition-transform duration-200 shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              {/* Custom Menu Overlay — Slightly scaled down height to prevent breaking screen bounds */}
              {isDropdownOpen && (
                <ul className="absolute z-50 bottom-full mb-1 left-0 right-0 max-h-36 sm:max-h-44 overflow-y-auto bg-white border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] divide-y-2 divide-black/5 custom-scrollbar animate-fade-in">
                  {INDIAN_STATES.map((state, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleStateSelect(state)}
                      className="px-3.5 py-2 font-bold text-xs sm:text-sm text-black hover:bg-yellow-400 transition-colors cursor-pointer"
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Form Submit Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black border-3 border-black font-black py-2.5 sm:py-3.5 px-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-colors tracking-wide text-xs sm:text-sm cursor-pointer uppercase mt-2"
          >
            {loading ? "Processing Admission..." : "Submit & Join Telegram"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
