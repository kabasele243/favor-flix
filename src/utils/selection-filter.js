export default function selectionFilter({ series, films, theatres } = []) {
  return {
    series: [
      { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
      { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
    ],
    theatres: [
      { title: 'Congolais', data: theatres?.filter((item) => item.genre === 'congolais') },
      { title: 'Diaspora', data: theatres?.filter((item) => item.genre === 'diaspora') },
      { title: 'Africain', data: theatres?.filter((item) => item.genre === 'africain') },
      { title: 'Ancien Succes', data: theatres?.filter((item) => item.genre === 'africain') },
      { title: 'Internationales', data: theatres?.filter((item) => item.genre === 'internationales') },
    ],
  };
}
