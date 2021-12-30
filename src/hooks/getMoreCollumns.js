import { titleMaker } from './titleMaker';
import { getSpecificMonthData } from './getSpecificMonthData';

export async function getMoreCollumns({ columnArrayData, setColumArrayData }) {
  const schemaData = {
    id: 0,
    title: '',
    arrayMovies: [],
    lastDayOfLastMonth: 0,
    month: 0,
    year: 0,
  };

  if (columnArrayData.length === 0) {
    const today = new Date();

    const lastDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0, // Colocando o 0 como último parâmetro retornaremos o último dia do mês passado
    );
    const [year, month, day] = [
      lastDayOfLastMonth.getFullYear(),
      lastDayOfLastMonth.getMonth() + 1, // getMonth() retorna um valor de 0-11 por isso o mais 1
      lastDayOfLastMonth.getDate(),
    ];

    const arrayMovies = await getSpecificMonthData({ year, month, day });

    schemaData.id = 0;
    schemaData.title = titleMaker({ year, month });
    schemaData.arrayMovies = arrayMovies;
    schemaData.year = year;
    schemaData.month = month;

    setColumArrayData((previusValues) => [...previusValues, schemaData]);
    return;
  }

  const lastIndexArray = columnArrayData.length - 1;

  let [previusYear, previusMonth] = [
    columnArrayData[lastIndexArray].year,
    columnArrayData[lastIndexArray].month - 1, // -1 pois queremos o mês anterior ao do ultimo array
  ];

  if (previusMonth === 0) {
    previusMonth = 12;
    previusYear -= 1;
  }

  const lastDayOfPreviusMonth = new Date(previusYear, previusMonth, 0); // Colocando o 0 como último parâmetro retornaremos o último dia do mês passado

  const [year, month, day] = [
    lastDayOfPreviusMonth.getFullYear(),
    lastDayOfPreviusMonth.getMonth() + 1, // getMonth() retorna um valor de 0-11 por isso o mais 1
    lastDayOfPreviusMonth.getDate(),
  ];

  const arrayMovies = await getSpecificMonthData({ year, month, day });

  schemaData.id = columnArrayData[lastIndexArray].id + 1;
  schemaData.title = titleMaker({ year, month });
  schemaData.arrayMovies = arrayMovies;
  schemaData.year = year;
  schemaData.month = month;

  setColumArrayData((previusValues) => {
    if (previusValues.length > 15) {
      // Esse IF Statement está prevendo que o usuário
      // Tenha problemas de memória, fazendo com que,
      // Ao chegar na Coluna 15 adicionaremos uma nova coluna
      // Contudo a primeira coluna carregada será excluída da memória.

      previusValues.shift();
      return [...previusValues, schemaData];
    }
    return [...previusValues, schemaData];
  });
}
