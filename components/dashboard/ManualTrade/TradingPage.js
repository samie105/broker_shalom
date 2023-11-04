"use client";
import React from "react";
import { AdvancedChart, SymbolInfo, TickerTape } from "react-tradingview-embed";
import { useTheme } from "../../../contexts/themeContext";
import TradingForm from "./TradingForm";

export default function TradingPage({ market, marketType, provider, price }) {
  const { isDarkMode } = useTheme();
  return (
    <div className=" pr-3 flex flex-col">
      <div className={`mt-3 ${isDarkMode ? "text-white" : ""}`}>
        {marketType === "crypto" && (
          <SymbolInfo
            widgetPropsAny={{
              symbol: `${provider}:${market}USD`,
              width: "100%",
              locale: "en",
              colorTheme: `${isDarkMode ? "dark" : "light"}`,
              isTransparent: true,
            }}
          />
        )}
        {marketType === "stock" && (
          <SymbolInfo
            widgetPropsAny={{
              symbol: `${market}`,
              width: "100%",
              locale: "en",
              colorTheme: `${isDarkMode ? "dark" : "light"}`,
              isTransparent: true,
            }}
          />
        )}
        {marketType === "forex" && (
          <SymbolInfo
            widgetPropsAny={{
              symbol: `${market}`,
              width: "100%",
              locale: "en",
              colorTheme: `${isDarkMode ? "dark" : "light"}`,
              isTransparent: true,
            }}
          />
        )}
        <TickerTape
          widgetProps={{
            symbols: [
              {
                proName: "FOREXCOM:SPXUSD",
                title: "S&P 500",
              },
              {
                proName: "FOREXCOM:NSXUSD",
                title: "US 100",
              },
              {
                proName: "FX_IDC:EURUSD",
                title: "EUR to USD",
              },
              {
                proName: "BITSTAMP:BTCUSD",
                title: "Bitcoin",
              },
              {
                proName: "BITSTAMP:ETHUSD",
                title: "Ethereum",
              },
            ],
            showSymbolLogo: true,
            colorTheme: `${isDarkMode ? "dark" : "light"}`,
            isTransparent: true,
            displayMode: "adaptive",
            locale: "en",
          }}
        />
        {marketType === "crypto" && (
          <div className=" w-full h-[610px]">
            <AdvancedChart
              widgetProps={{
                isTransparent: true,
                width: "100%",
                height: "610px",
                symbol: `${provider}:${market}USD`,
                interval: "D",
                timezone: "Etc/UTC",
                theme: `${isDarkMode ? "dark" : "light"}`,
                style: "1",
                locale: "en",
                enable_publishing: false,
                backgroundColor: `${isDarkMode ? "#0A0A0A" : "#ffffff"}`,
                withdateranges: true,
                hide_side_toolbar: true,
                allow_symbol_change: false,
                hotlist: false,
                calendar: false,
                studies: ["STD;Klinger%1Oscillator"],
                container_id: "tradingview_2c49b",
              }}
            />
          </div>
        )}
        {marketType === "stock" && (
          <div className=" w-full h-[610px]">
            <AdvancedChart
              widgetProps={{
                isTransparent: true,
                width: "100%",
                height: "610px",
                symbol: `${market}`,
                interval: "D",
                timezone: "Etc/UTC",
                theme: `${isDarkMode ? "dark" : "light"}`,
                style: "1",
                locale: "en",
                enable_publishing: false,
                backgroundColor: `${isDarkMode ? "#0A0A0A" : "#ffffff"}`,
                withdateranges: true,
                hide_side_toolbar: true,
                allow_symbol_change: false,
                hotlist: false,
                calendar: false,
                studies: ["STD;Klinger%1Oscillator"],
                container_id: "tradingview_2c49b",
              }}
            />
          </div>
        )}
        {marketType === "forex" && (
          <div className=" w-full h-[610px]">
            <AdvancedChart
              widgetProps={{
                isTransparent: true,
                width: "100%",
                height: "610px",
                symbol: `${market}`,
                interval: "D",
                timezone: "Etc/UTC",
                theme: `${isDarkMode ? "dark" : "light"}`,
                style: "1",
                locale: "en",
                enable_publishing: false,
                backgroundColor: `${isDarkMode ? "#0A0A0A" : "#ffffff"}`,
                withdateranges: true,
                hide_side_toolbar: true,
                allow_symbol_change: false,
                hotlist: false,
                calendar: false,
                studies: ["STD;Klinger%1Oscillator"],
                container_id: "tradingview_2c49b",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <TradingForm
          market={market}
          marketType={marketType}
          provider={provider}
          price={price}
        />
      </div>
    </div>
  );
}
