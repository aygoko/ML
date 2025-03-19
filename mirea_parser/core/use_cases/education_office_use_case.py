from core.data_sources.http_repository import HttpRepository
from core.repositories.education_office_parser import EducationOfficeParser
from core.use_cases.use_case import UseCase

class EducationOfficeUseCase(UseCase):
    def __init__(self):
        super().__init__(
            HttpRepository(),
            EducationOfficeParser(),
            "https://www.mirea.ru/education/the-institutes-and-faculties/institute-of-information-technology/contacts/"
        )