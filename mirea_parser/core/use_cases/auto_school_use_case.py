from core.data_sources.http_repository import HttpRepository
from core.repositories.auto_school_parser import AutoSchoolParser
from core.use_cases.use_case import UseCase

class AutoSchoolUseCase(UseCase):
    def __init__(self):
        url = "http://autoschool-mirea.ru/"
        parser = AutoSchoolParser()
        repository = HttpRepository()
        super().__init__(repository, parser, url)