"use client";

import { useLanguage } from "@/context/LanguageContext";

export function BlogPageHeader() {
    const { t } = useLanguage();
    return (
        <div className="mb-16">
            <div className="accent-line mb-8" />
            <h1 className="text-display text-white mb-6">{t.blog.pageTitle}</h1>
            <p className="text-subheading text-white/55 max-w-2xl">
                {t.blog.pageDescription}
            </p>
        </div>
    );
}
