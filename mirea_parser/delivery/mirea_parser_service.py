from core.use_cases.use_case import UseCase
from core.use_cases.education_office_use_case import EducationOfficeUseCase
from core.use_cases.auto_school_use_case import AutoSchoolUseCase
from core.use_cases.library_use_case import LibraryUseCase
from core.use_cases.scholarships_use_case import ScholarshipsUseCase
from core.use_cases.contacts_use_case import ContactsUseCase
from core.use_cases.events_use_case import EventsUseCase

class MireaParserService:
    def __init__(self):
        self.use_cases = [
            EducationOfficeUseCase(),
            AutoSchoolUseCase(),
            LibraryUseCase(),
            ScholarshipsUseCase(),
            ContactsUseCase(),
            EventsUseCase()
        ]

    def get_all_data(self):
        results = {}
        for use_case in self.use_cases:
            section_name = use_case.__class__.__name__.replace('UseCase', '')
            result = use_case.execute()
            results[section_name] = result
        return results