
import { Badge } from "@/components/ui/badge";
import {motion} from "framer-motion";
export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is an e-wallet and how does it work?",
    answer:
      "An e-wallet is a secure digital wallet that lets you store money online and make payments instantly. You can use it to send, receive, and store funds without carrying physical cash.",
  },
  {
    question: "How can I add money to my e-wallet?",
    answer:
      "You can add money through linked bank accounts, debit/credit cards, or by visiting nearby agents. Once added, your balance is updated instantly in the app.",
  },
  {
    question: "Is my money safe in the e-wallet?",
    answer:
      "Yes. Your transactions are protected with encryption, PIN codes, and two-factor authentication. Even if you lose your phone, your money remains safe.",
  },
  {
    question: "Can I send money to someone who does not have an e-wallet?",
    answer:
      "Yes, you can transfer money directly to their bank account or mobile number. If the receiver does not have an e-wallet, they will receive the amount in their bank or as a redeemable code.",
  },
  {
    question: "Are there any fees for transactions?",
    answer:
      "Most transactions within the app are free, such as sending money to friends or paying bills. However, small charges may apply for cash-out or cross-bank transfers.",
  },
  {
    question: "What should I do if I lose my phone?",
    answer:
      "Immediately log in to your account from another device and change your password. You can also contact our 24/7 support team to temporarily block your wallet for safety.",
  },
];

export const Faq = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge className="text-xs font-medium">{badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


