// Determines the culture level based on the total score
export const getCultureLevel = (score) => {
    if (score >= 81)
      return {
        level: "The Culture Innovator",
        description: [
          "Wow, your company is crushing it! Innovation is booming, top talent is lining up, and everyone's genuinely engaged. You're basically setting the gold standard. 🏆",
          "But here's the kicker: staying at the top means never getting complacent. Continuous, smart refinements are how you keep that competitive edge sharp and stay miles ahead of the pack. 🚀",
        ],
        cta: "Onthrive isn't just for fixing problems; it's for **perpetuating excellence and market leadership**. Partner with us to continuously elevate your already stellar culture, set new industry benchmarks, and secure your competitive edge for the long term. ✨",
      };
    if (score >= 61)
      return {
        level: "The Emerging Leader",
        description: [
          "Good vibes and massive potential! Your team has a solid foundation of engagement, and you're clearly on the rise. You've got something special brewing. 🌱",
          "Here's the secret sauce: 'good' is the enemy of 'great'. There are subtle tweaks and untapped strengths waiting to be unleashed. Imagine transforming 'strong' into 'unbeatable'—that's your next move. 💪",
        ],
        cta: "Ready to move from strong to **unbeatable and industry-defining**? Onthrive provides the strategic insights and actionable tools to refine your strengths, eliminate hidden friction, and unlock your team's full, unparalleled potential, positioning you as a true market leader. 📈",
      };
    if (score >= 41)
      return {
        level: "The Developing Force",
        description: [
          "You've got some clear strengths and a real desire to evolve, which is awesome! But let's be real, there are noticeable areas holding you back from truly dominating. 🚧",
          "This is your moment. Smart, targeted investments in your culture now can prevent stagnation and unlock massive competitive advantages. Miss this chance, and you might just get left behind. ⏳",
        ],
        cta: "It's time to cultivate your culture into a powerhouse that drives market dominance. Onthrive specializes in identifying precise growth opportunities and implementing targeted solutions that turn potential into **consistent, dominant performance**, ensuring you don't just compete, but lead. 🌟",
      };
    if (score >= 21)
      return {
        level: "The Culture Challenge",
        description: [
          "Let's be honest: things are a bit bumpy. Productivity might be dragging, and keeping your best people feels like an endless uphill battle. It's tough, we get it. 😥",
          "While there might be a few bright spots, it's clear a comprehensive culture reset is needed. This isn't just a 'nice-to-have'; it's absolutely vital to prevent further decline and kickstart a real turnaround. 🛠️",
        ],
        cta: "Feeling the struggle? You're not alone, and it's not too late! Onthrive offers a **proven blueprint** to diagnose core issues, rebuild trust, and transform your workplace from surviving to thriving. It's time to reclaim your company's potential. ✅",
      };
    return {
      level: "The Culture Crisis",
      description: [
        "Alright, let's talk. Your company culture is in emergency mode. We're talking widespread disengagement, rock-bottom trust, and a vibe that's actively hurting the business. This is a serious threat. 🚨",
        "This isn't just a challenge; it's a direct threat to your existence and market standing. Urgent, decisive action isn't just recommended, it's absolutely essential to pull back from the brink and secure your future. 📉",
      ],
      cta: "This is a pivotal moment that demands immediate, expert intervention. Onthrive provides the **urgent, strategic leadership and comprehensive solutions** needed to resurrect your culture, restore trust, and establish the foundational elements for market leadership and sustainable growth. Your future depends on acting now. 💼",
    };
  };