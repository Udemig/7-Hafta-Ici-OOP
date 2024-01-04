// abstrack sınıf ve veri çekmek için kullanılan yapı
abstract class DataFetcher {
  constructor(apiUrl: string) {}
  // Abstract Method:Veriyi çekme ve silme işlemi
  abstract fetchData(apiKey: string): object | string;
  abstract deleteData(apiKey: string): object;
}

class FetchDog extends DataFetcher {
  // fetchData implement edildi
  fetchData(apiKey: string): object {
    // api ile haberleşir...
    const response = { ok: true, status: 200, data: "Pitbull" };
    if (response.ok) {
      return response;
    }
    return { message: "Üzgünüz bir hata oluştu" };
  }
  // deleteData implement edildi
  deleteData(apiKey: string): object {
    return { ok: true, message: "Veri başarıyla kaldırıldı" };
  }
}
const fetcher = new FetchDog("www.doogsapi.com/api");
// console.log(fetcher.fetchData("swqe23123-123123"));
console.log(fetcher.deleteData("swqe23123-123123"));
