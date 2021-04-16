import { PureComponent } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { NewsDocument } from "../model/news.types";
import dbNewsService from "../database/dbNewsService";
import dbUserdataService from "../database/dbUserdataService";

interface MainPageProps extends WithTranslation {}

interface MainPageState {
  news?: Array<{ document: NewsDocument; author: string }>;
}

class MainPage extends PureComponent<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { news: undefined };
  }

  async componentDidMount() {
    const newsDocuments = await dbNewsService.getNews();
    const news: Array<{ document: NewsDocument; author: string }> = [];
    if (newsDocuments) {
      for (let newsDocument of newsDocuments) {
        news.push({ document: newsDocument, author: await dbUserdataService.getNameOfUser(newsDocument.author) });
      }
    }
    this.setState({ news });
  }

  render() {
    const { t } = this.props;
    const { news } = this.state;
    return (
      <div>
        {news &&
          news.map((n, key) => {
            return (
              <div className="mt-5 m-4" key={key}>
                <div className="row">
                  <div className="col text-left">
                    <span className="h2">{n.document.header}</span>
                    <span className="ml-2">{n.document.date.toLocaleDateString()}</span>
                  </div>
                  <div className="col text-right h5">
                    {t("by")} {n.author}
                  </div>
                </div>
                <div className="text-left">{n.document.content}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default withTranslation("general")(MainPage);
