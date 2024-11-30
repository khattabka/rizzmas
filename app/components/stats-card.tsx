"use client";
import { useState, useEffect } from "react";
import { Copy, Gift, Snowflake, TreesIcon as Tree } from "lucide-react";
import {
  BrandDiscord,
  BrandTelegram,
  BrandTwitter,
  BrandTiktok,
  BrandReddit,
  BrandInstagram,
  Mail,
} from "tabler-icons-react";
import { Button } from "@/components/ui/button";

export function StatsCard() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilChristmas());
  const [stats, setStats] = useState({
    price: 0.000071,
    marketCap: 35240421,
    liquidity: 1555559.41,
    volume: 44100286.74,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilChristmas());
    }, 1000);

    const statsUpdater = setInterval(() => {
      setStats((prevStats) => ({
        price: prevStats.price * (1 + (Math.random() - 0.5) * 0.01),
        marketCap: prevStats.marketCap * (1 + (Math.random() - 0.5) * 0.005),
        liquidity: prevStats.liquidity * (1 + (Math.random() - 0.5) * 0.002),
        volume: prevStats.volume * (1 + (Math.random() - 0.5) * 0.008),
      }));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(statsUpdater);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-red-100 to-green-100 rounded-3xl shadow-lg p-6 space-y-6 transform transition-all duration-500 hover:scale-105 border-4 border-red-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent animate-pulse">
            $RIZZMAS
          </h1>
          <p className="text-sm text-gray-700">Festive Solana Token</p>
        </div>
        <span className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full animate-bounce">
          Merry Trending!
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatBox
          label="Price USD"
          value={`$${stats.price.toFixed(6)}`}
          icon={<Gift className="w-5 h-5 text-red-500" />}
        />
        <StatBox
          label="Market Cap"
          value={`$${Math.round(stats.marketCap).toLocaleString()}`}
          icon={<Tree className="w-5 h-5 text-green-500" />}
        />
        <StatBox
          label="Liquidity"
          value={`$${stats.liquidity.toFixed(2)}`}
          icon={<Snowflake className="w-5 h-5 text-blue-500" />}
        />
        <StatBox
          label="24h Volume"
          value={`$${Math.round(stats.volume).toLocaleString()}`}
          icon={<Gift className="w-5 h-5 text-red-500" />}
        />
      </div>

      {/* Countdown */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-red-600 mb-2">
          Christmas Countdown
        </h2>
        <div className="bg-white rounded-xl p-4 shadow-inner">
          <span
            className="text-2xl font-bold text-green-600"
            suppressHydrationWarning
          >
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </span>
        </div>
      </div>

      {/* Contract Address */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-red-600">
          Santa's Contract Address
        </p>
        <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-inner">
          <code className="text-sm text-green-600 truncate">
            85cQsFgbi8mBZxiPppbpPXuV7j1hA8t...
          </code>
          <Button
            className="text-red-500 hover:text-red-600 transition-colors"
            onClick={() =>
              copyToClipboard("85cQsFgbi8mBZxiPppbpPXuV7j1hA8t...")
            }
          >
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors transform hover:scale-105 shadow-lg">
          Buy $RIZZMAS Gifts
        </Button>
        <Button className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors transform hover:scale-105 shadow-lg">
          DEXTools Explorer (North Pole Edition)
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 pt-2">
        <SocialIcon
          Icon={BrandTelegram}
          href="#"
          color="text-red-500"
          hoverColor="text-red-600"
        />
        <SocialIcon
          Icon={BrandDiscord}
          href="#"
          color="text-green-500"
          hoverColor="text-green-600"
        />
        <SocialIcon
          Icon={BrandTwitter}
          href="#"
          color="text-red-500"
          hoverColor="text-red-600"
        />
        <SocialIcon
          Icon={BrandTiktok}
          href="#"
          color="text-green-500"
          hoverColor="text-green-600"
        />
        <SocialIcon
          Icon={BrandReddit}
          href="#"
          color="text-red-500"
          hoverColor="text-red-600"
        />
        <SocialIcon
          Icon={BrandInstagram}
          href="#"
          color="text-green-500"
          hoverColor="text-green-600"
        />
        <SocialIcon
          Icon={Mail}
          href="#"
          color="text-red-500"
          hoverColor="text-red-600"
        />
      </div>
    </div>
  );
}

function StatBox({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-4 rounded-xl transition-all duration-300 hover:shadow-md flex items-center space-x-2">
      {icon}
      <div>
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <p className="text-lg font-bold text-green-600">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({
  Icon,
  href,
  color,
  hoverColor,
}: {
  Icon: any;
  href: string;
  color: string;
  hoverColor: string;
}) {
  return (
    <a
      href={href}
      className={`${color} hover:${hoverColor} transition-colors transform hover:scale-110`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
    </a>
  );
}

function getTimeUntilChristmas() {
  const now = new Date();
  const christmasYear =
    now.getMonth() === 11 && now.getDate() > 25
      ? now.getFullYear() + 1
      : now.getFullYear();
  const christmas = new Date(christmasYear, 11, 25);
  const difference = christmas.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard: ", text);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
