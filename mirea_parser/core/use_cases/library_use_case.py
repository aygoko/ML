from core.data_sources.http_repository import HttpRepository
from core.repositories.library_parser import LibraryParser
from core.use_cases.use_case import UseCase

class LibraryUseCase(UseCase):
    def __init__(self):
        url = "https://ibc.mirea.ru/"
        parser = LibraryParser()
        repository = HttpRepository()
        super().__init__(repository, parser, url)