import { IndicatorsData } from "../../settings/game-system-specifications";

// export function readCSV (req, res)
export function readCSV () {

    const fs = (window as any).fs;
    fs.readFile(
        'C:/CSV/Hydropower Turbine Flow.csv',
        (err,data) => {

            if (err) {
                return console.log(err);
            }

            const csvData = data.toString().split('\n');
            const _data = csvData[5].split(',');

            let index = 1;

            for(let periodId in IndicatorsData.hydroelectricTurbineData) {
                let todalPriodPercent = 0;
                let months = 0;
                for (let year = IndicatorsData.hydroelectricTurbineData[periodId].year_start; year <= IndicatorsData.hydroelectricTurbineData[periodId].year_end; year++) {
                    let yearValueAux = 0;
                    for (let month = 1; month <= 12; month++) {
                        IndicatorsData.hydroelectricTurbineData[periodId].years[year].months[month].id_month = month;
                        IndicatorsData.hydroelectricTurbineData[periodId].years[year].months[month].value_month = +(_data[index]);
                        IndicatorsData.hydroelectricTurbineData[periodId].years[year].months[month].percent_month = +(_data[index]) * 100 / 4.5;
                        yearValueAux += +(_data[index]);
                        index++;
                        months++;
                        todalPriodPercent += (+(_data[index]) * 100 / 4.5);
                    }
                    IndicatorsData.hydroelectricTurbineData[periodId].years[year].year_value = yearValueAux / 12;
                    // years++;
                }
                IndicatorsData.hydroelectricTurbineData[periodId].period_percent = todalPriodPercent / months;
            }
        }
    );

}
