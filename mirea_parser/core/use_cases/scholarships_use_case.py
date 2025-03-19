from core.data_sources.http_repository import HttpRepository
from core.repositories.scholarships_parser import ScholarshipsParser
from core.use_cases.use_case import UseCase

class ScholarshipsUseCase(UseCase):
    def __init__(self):
        url = "https://priem.mirea.ru/about/specscholarship"
        parser = ScholarshipsParser()
        repository = HttpRepository()
        super().__init__(repository, parser, url)