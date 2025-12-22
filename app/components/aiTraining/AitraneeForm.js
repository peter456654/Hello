'use client';
import React, { useState, useRef } from 'react';
import { FiUploadCloud, FiFile, FiCheckCircle, FiX } from "react-icons/fi";

const AitraneeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        experience: '',
        contact: '',
        resume: null,
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        setFileError("");
        if (!file) return;
        
        if (file.type === 'application/pdf') {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                setFormData({ ...formData, resume: base64 });
            };
            reader.readAsDataURL(file);
        } else {
            setFileError("Please upload a valid PDF file.");
            setFileName("");
            setFormData({ ...formData, resume: null });
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const onButtonClick = () => {
        fileInputRef.current.click();
    };

    const removeFile = () => {
        setFileName("");
        setFormData({ ...formData, resume: null });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');

        try {
            const requestData = {
                name: formData.name,
                email: formData.email,
                role: "2", // Changed to string "2"
                designation: formData.designation,
                experience: formData.experience,
                contact: formData.contact,
                resume: formData.resume
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_internship_profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Failed to send candidate details.');
            }

            const data = await response.json();
            setResponseMessage(data.message);
            setFormData({
                name: '',
                email: '',
                designation: '',
                experience: '',
                contact: '',
                resume: null,
            });
            setFileName("");
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            setResponseMessage('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-primary overflow-hidden py-24 md:py-20 lg:py-44">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
                <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
                <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
                <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
                <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                    
                    {/* Left Section */}
                    <div className="flex-1 text-center lg:pl-14 lg:text-left">
                        {/* Section Badge */}
                        <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-secondary/30 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
                            <span className="text-secondary text-sm font-medium">— AI Trainee Application —</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                            Apply <span className="bg-gradient-to-r from-primary via-primary-400 to-primary bg-clip-text text-transparent">Now</span>
                        </h2>

                        {/* Decorative underline */}
                        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mb-8 mx-auto lg:mx-0"></div>

                        <div className="relative max-w-3xl mx-auto lg:mx-0 space-y-6">
                            <div className="absolute -left-3 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent rounded-full hidden lg:block"></div>
                            
                            <p className="text-lg sm:text-lg md:text-lg text-white/90 leading-relaxed lg:pl-8 font-light">
                                We are committed to empowering the next generation of innovators through hands-on experience in <span className="text-secondary font-medium">AI, ML, and Data Science</span>. Join our internship program to gain real-world skills, work on impactful projects, and build a strong foundation for your future career in technology.
                            </p>
                            
                            <p className="text-base sm:text-lg md:text-lg text-white/80 leading-relaxed lg:pl-8 font-light">
                                If you're interested, we'd love to hear from you!
                            </p>
                            
                            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed lg:pl-8 font-light">
                                Let's make this an <span className="text-secondary font-medium">unforgettable journey</span> together. Apply now and kickstart your career!
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Enhanced Form */}
                    <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
                        <div className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 hover:bg-primary/40 hover:border-secondary/30 transition-all duration-500 shadow-2xl shadow-secondary/25 relative">
                            
                            {/* Form Header Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                    <polyline points="14,2 14,8 20,8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10,9 9,9 8,9"/>
                                </svg>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Full Name *"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:px-6 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary/50 transition-all duration-300 group-hover:bg-white/15"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:px-6 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary/50 transition-all duration-300 group-hover:bg-white/15"
                                    />
                                </div>

                                {/* Area of Interest Input */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="designation"
                                        name="designation"
                                        placeholder="Area of Interest *"
                                        required
                                        value={formData.designation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:px-6 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary/50 transition-all duration-300 group-hover:bg-white/15"
                                    />
                                </div>

                                {/* Experience Input */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="experience"
                                        name="experience"
                                        placeholder="Experience if any *"
                                        required
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:px-6 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary/50 transition-all duration-300 group-hover:bg-white/15"
                                    />
                                </div>

                                {/* Contact Input */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        placeholder="Phone Number *"
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 md:px-6 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary/50 transition-all duration-300 group-hover:bg-white/15"
                                    />
                                </div>

                                {/* Enhanced Resume Upload */}
                                <div className="space-y-2">
                                    <label className="block text-white font-medium text-xs">
                                        Attach Resume / CV *
                                    </label>
                                    
                                    <div 
                                        className={`relative border-2 border-dashed rounded-md p-2.5 transition-all duration-300 cursor-pointer group ${
                                            dragActive 
                                                ? 'border-secondary bg-secondary/8' 
                                                : 'border-white/30 hover:border-secondary/50 hover:bg-white/5'
                                        } ${fileName ? 'bg-white/5' : ''}`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            ref={fileInputRef}
                                            accept="application/pdf"
                                            required={!formData.resume}
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        
                                        {!fileName ? (
                                            <div className="flex flex-col items-center justify-center space-y-1.5 text-center">
                                                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                    <FiUploadCloud className="w-4 h-4 text-secondary" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-xs mb-1">Drag & drop resume</p>
                                                    <p className="text-white/70 text-xs mb-1.5">or click to browse</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={onButtonClick}
                                                    className="px-3 py-1 bg-secondary/20 text-secondary rounded-sm hover:bg-secondary/30 transition-all duration-300 text-xs font-medium border border-secondary/30 hover:border-secondary/50"
                                                >
                                                    Browse
                                                </button>
                                                <p className="text-xs text-white/60">PDF only</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-2 rounded-md border border-white/20">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-5 h-5 bg-secondary/20 rounded-md flex items-center justify-center">
                                                        <FiFile className="text-secondary w-3 h-3" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-medium text-xs truncate max-w-[120px]">{fileName}</p>
                                                        <p className="text-secondary text-xs flex items-center">
                                                            <FiCheckCircle className="mr-1 w-3 h-3" /> Ready
                                                        </p>
                                                    </div>
                                                </div>
                                                <button 
                                                    type="button" 
                                                    onClick={removeFile}
                                                    className="text-white/70 hover:text-red-400 transition-colors duration-300 p-0.5"
                                                >
                                                    <FiX className="w-3 h-3" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {fileError && (
                                        <p className="text-red-400 text-xs mt-1 flex items-center">
                                            <FiX className="mr-1 w-3 h-3" />
                                            {fileError}
                                        </p>
                                    )}
                                </div>

                                {/* Enhanced Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-6 py-4 rounded-xl hover:from-secondary/90 hover:to-secondary hover:shadow-2xl hover:shadow-secondary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    disabled={loading}
                                >
                                    <span className="relative z-10">
                                        {loading ? "Submitting..." : "Submit Application"}
                                    </span>
                                    {!loading && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                                    )}
                                </button>

                                {/* Response Message */}
                                {responseMessage && (
                                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center">
                                        <p className="text-white font-medium">{responseMessage}</p>
                                    </div>
                                )}
                            </form>

                            {/* Bottom glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Bottom Decoration */}
            <div className="absolute bottom-0 right-0 opacity-20">
                <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
            </div>
        </div>
    );
};

export default AitraneeForm;
