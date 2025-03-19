from core.data_sources.repository_interface import RepositoryInterface
from core.repositories.parser_interface import ParserInterface

class UseCase:
    def __init__(
        self,
        repository: RepositoryInterface,
        parser: ParserInterface,
        url: str
    ):
        self.repository = repository
        self.parser = parser
        self.url = url

    def execute(self) -> object | None:
        html = self.repository.get_data(self.url)
        if not html:
            return None
        return self.parser.parse(html)