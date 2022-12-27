import Client from "./../../../api/tradingview/client";
import priceNotification from './priceNotification';

export default function getPrice(symbol) {

    const fetchData = async() => {
        try {
            const client = new Client();
            const chart = new client.Session.Chart();

            chart.setMarket(symbol);
            chart.setSeries("1D")

            chart.onUpdate( () => {
                if (!chart.periods[0]) return;

                const responseData = {
                    symbol: symbol,
                    description: chart.infos.description,
                    local_description: chart.infos.local_description,
                    price: `${chart.periods[0].close} ${chart.infos.currency_id}`,
                    percentage: Math.round(((chart.periods[0].close - chart.periods[1].close)*100/
                        chart.periods[1].close)*100)/100,
                    type: chart.infos.type,
                    listed_exchange: chart.infos.listed_exchange,
                    country : chart.infos.country
                };
                priceNotification(responseData)
                chart.delete();
                client.end();
            });
        }
        catch (err) {
            SetError(err.message);
        }
    }
    
    fetchData()
};