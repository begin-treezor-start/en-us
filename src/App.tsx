import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Settings, HelpCircle, AlertTriangle, ChevronDown, Menu, Lock, Key, Rocket, PenTool as Tool, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-opacity-90 bg-[var(--background)] backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Trėzor.io/start®
            </motion.div>
            
            <div className="hidden md:flex space-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#install">Install</NavLink>
              <NavLink href="#security">Security</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button px-6 py-2 rounded-full text-white"
              >
                Get Started
              </motion.button>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#install">Install</MobileNavLink>
              <MobileNavLink href="#security">Security</MobileNavLink>
              <MobileNavLink href="#faq">FAQ</MobileNavLink>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-center"
          >
            Secure Your Cryptocurrency with Trezor Wallet
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            In the fast-evolving world of cryptocurrency, security is paramount. With increasing cyber threats and hacking attempts, securing your digital assets has never been more important. <strong>Trezor</strong> is one of the most trusted hardware wallets available today, and setting it up correctly via <a href="https://trezor.io/start" className="text-accent hover:underline">Trėzor.io/Start</a> is crucial to ensuring the safety of your funds.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-opacity-50 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Why Choose a Trezor Hardware Wallet?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Offline Security"
              description="Private keys never leave your device, making it immune to online threats."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title="User-Friendly Interface"
              description="Simple setup process through Trezor Suite."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="Multi-Currency Support"
              description="Supports over 1,000 cryptocurrencies including Bitcoin, Ethereum, and more."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Backup & Recovery"
              description="A secure recovery seed allows you to restore your wallet if the device is lost."
            />
            <FeatureCard
              icon={<Key className="w-8 h-8" />}
              title="Advanced Security"
              description="PIN protection, passphrase encryption, and firmware updates."
            />
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Getting Started with Your Trezor Wallet
          </motion.h2>
          <div className="space-y-12">
            <SetupStep
              number={1}
              title="Unboxing & Connecting Your Trezor Wallet"
              content={
                <>
                  <h3 className="text-xl font-semibold mb-4">What's Inside the Trezor Box?</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Trezor Hardware Wallet (Model One or Model T)</li>
                    <li>USB-C or Micro USB Cable</li>
                    <li>Recovery Seed Cards</li>
                    <li>Quick Start Guide</li>
                    <li>Security Seal (Ensure it is intact before opening)</li>
                  </ul>
                </>
              }
            />
            <SetupStep
              number={2}
              title="Installing Firmware & Creating a Wallet"
              content={
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Click <strong>Install Firmware</strong> and wait for the installation to complete.</li>
                  <li>Once installed, <strong>disconnect and reconnect</strong> your device.</li>
                  <li>Choose <strong>"Create a New Wallet"</strong> and confirm the action on your Trezor device.</li>
                </ul>
              }
            />
            <SetupStep
              number={3}
              title="Backing Up Your Recovery Seed"
              content={
                <>
                  <p className="mb-4 text-gray-300">
                    <strong>The Recovery Seed</strong> is a <em>12, 18, or 24-word phrase</em> that serves as a <strong>backup of your wallet</strong>.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li><strong>NEVER</strong> store your recovery phrase digitally.</li>
                    <li>Write down the recovery seed on the provided <strong>recovery card</strong>.</li>
                    <li>Store it in a <strong>safe, offline location</strong>.</li>
                    <li>Verify the seed words carefully before proceeding.</li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 px-4 bg-opacity-50 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 gradient-text text-center"
          >
            Best Security Practices
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SecurityCard
              icon={<Lock />}
              title="Always Update Firmware"
              description="Keep your device secure by regularly updating via Trėzor.io/Start."
            />
            <SecurityCard
              icon={<Key />}
              title="Protect Your Recovery Seed"
              description="Never share your recovery seed with anyone and store it securely offline."
            />
            <SecurityCard
              icon={<Shield />}
              title="Use Strong PIN"
              description="Set up a strong PIN and enable passphrase protection for extra security."
            />
            <SecurityCard
              icon={<AlertTriangle />}
              title="Avoid Phishing"
              description="Always verify website URLs before entering sensitive information."
            />
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 gradient-text"
          >
            The Ultimate Solution for Crypto Security
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCheck text="Unmatched security for digital assets" />
            <FeatureCheck text="Simple setup process" />
            <FeatureCheck text="User-friendly interface" />
            <FeatureCheck text="Support for 1,000+ cryptocurrencies" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <a
              href="https://trezor.io/start"
              className="cyber-button px-8 py-4 rounded-full text-white text-lg inline-flex items-center gap-2"
            >
              <Rocket className="w-6 h-6" />
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--background)] py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Trėzor.io/start®</h3>
              <p className="text-gray-400">Your trusted partner in cryptocurrency security and management.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#install" className="hover:text-white">Installation</a></li>
                <li><a href="#security" className="hover:text-white">Security</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </motion.div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Trėzor.io/start®. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block py-2 text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-6 rounded-xl bg-opacity-50 bg-gray-800 neon-border"
  >
    <div className="text-[var(--accent)] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const SetupStep = ({ number, title, content }: { number: number; title: string; content: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="flex items-start gap-6 p-6 rounded-xl bg-opacity-50 bg-gray-800"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="text-gray-300">{content}</div>
    </div>
  </motion.div>
);

const SecurityCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="p-6 rounded-xl bg-opacity-50 bg-gray-800 text-left"
  >
    <div className="text-[var(--accent)] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const FeatureCheck = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="flex items-center gap-2 text-gray-300"
  >
    <CheckCircle className="text-[var(--accent)] flex-shrink-0" />
    <span>{text}</span>
  </motion.div>
);

export default App;