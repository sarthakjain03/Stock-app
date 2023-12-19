// export const allSymbols = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${import.meta.env.VITE_API_KEY}`

export const quoteData = (symbol) => `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${import.meta.env.VITE_API_KEY}`

export const stockSearch = (query) => `https://finnhub.io/api/v1/search?q=${query}&token=${import.meta.env.VITE_API_KEY}`