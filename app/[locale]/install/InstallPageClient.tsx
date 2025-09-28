"use client";

import { useTranslations } from "next-intl";
import PageShell from "@/app/components/PageShell";

export default function InstallPageClient() {
  const t = useTranslations();

  return (
    <PageShell title={t('install.title')}>
      {/* Installation Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>{t('install.intro.title')}</strong>
        </p>
        <p className="text-slate-300">
          {t('install.intro.subtitle')}
        </p>
      </div>

      {/* Installation Steps */}
      <div className="space-y-12 my-16">
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-white">{t('install.step1.title')}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {t('install.step1.description')}
            </p>
            <div className="space-y-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center">
                <span className="mr-2">🛒</span>
                {t('install.step1.button')}
              </button>
              <p className="text-slate-400 text-sm">
                {t('install.step1.features')}
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛒</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">{t('install.step1.card.title')}</h4>
                <p className="text-slate-400 text-sm">
                  {t('install.step1.card.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-white">{t('install.step2.title')}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {t('install.step2.description')}
            </p>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">🔒 {t('install.step2.privacy.title')}</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• {t('install.step2.privacy.point1')}</li>
                <li>• {t('install.step2.privacy.point2')}</li>
                <li>• {t('install.step2.privacy.point3')}</li>
                <li>• {t('install.step2.privacy.point4')}</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📧</span>
                </div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">{t('install.step2.card.title')}</h4>
                <p className="text-slate-400 text-sm">
                  {t('install.step2.card.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-white">{t('install.step3.title')}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {t('install.step3.description')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">🤖 {t('install.step3.feature1.title')}</h4>
                <p className="text-slate-400 text-sm">{t('install.step3.feature1.subtitle')}</p>
              </div>
              <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">⚡ {t('install.step3.feature2.title')}</h4>
                <p className="text-slate-400 text-sm">{t('install.step3.feature2.subtitle')}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">{t('install.step3.card.title')}</h4>
                <p className="text-slate-400 text-sm">
                  {t('install.step3.card.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Requirements */}
      <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 my-12">
        <h3 className="text-yellow-300 font-semibold mb-4">💻 {t('install.requirements.title')}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">{t('install.requirements.browsers.title')}</h4>
            <ul className="text-slate-300 space-y-1">
              <li>✅ {t('install.requirements.browsers.chrome')}</li>
              <li>✅ {t('install.requirements.browsers.edge')}</li>
              <li>✅ {t('install.requirements.browsers.brave')}</li>
              <li>✅ {t('install.requirements.browsers.chromium')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">{t('install.requirements.system.title')}</h4>
            <ul className="text-slate-300 space-y-1">
              <li>• {t('install.requirements.system.chrome')}</li>
              <li>• {t('install.requirements.system.gmail')}</li>
              <li>• {t('install.requirements.system.internet')}</li>
              <li>• {t('install.requirements.system.storage')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="my-16">
        <h2 className="text-center mb-8">{t('install.help.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('install.help.notShowing.title')}</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. {t('install.help.notShowing.step1')}</li>
              <li>2. {t('install.help.notShowing.step2')}</li>
              <li>3. {t('install.help.notShowing.step3')}</li>
              <li>4. {t('install.help.notShowing.step4')}</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('install.help.permissions.title')}</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. {t('install.help.permissions.step1')}</li>
              <li>2. {t('install.help.permissions.step2')}</li>
              <li>3. {t('install.help.permissions.step3')}</li>
              <li>4. {t('install.help.permissions.step4')}</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('install.help.performance.title')}</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. {t('install.help.performance.step1')}</li>
              <li>2. {t('install.help.performance.step2')}</li>
              <li>3. {t('install.help.performance.step3')}</li>
              <li>4. {t('install.help.performance.step4')}</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">{t('install.help.support.title')}</h3>
            <p className="text-slate-300 text-sm mb-3">
              {t('install.help.support.description')}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              {t('install.help.support.button')}
            </button>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-8 my-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🎉 {t('install.next.title')}</h2>
          <p className="text-slate-300 mb-6">
            {t('install.next.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-green-300 mb-2">{t('install.next.tutorial.title')}</h4>
              <p className="text-slate-400 text-sm">{t('install.next.tutorial.subtitle')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">{t('install.next.firstEmail.title')}</h4>
              <p className="text-slate-400 text-sm">{t('install.next.firstEmail.subtitle')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">{t('install.next.quickActions.title')}</h4>
              <p className="text-slate-400 text-sm">{t('install.next.quickActions.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">{t('install.cta.title')}</h2>
        <p className="text-slate-300 mb-6">
          {t('install.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 {t('install.cta.install')}
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📺 {t('install.cta.demo')}
          </button>
        </div>
      </div>
    </PageShell>
  );
}