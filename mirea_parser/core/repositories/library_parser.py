from bs4 import BeautifulSoup
from core.domain.entities.library_schedule import LibrarySchedule
from core.repositories.parser_interface import ParserInterface

class LibraryParser(ParserInterface):
    def parse(self, html: str) -> LibrarySchedule:
        soup = BeautifulSoup(html, 'html.parser')
        schedule = {}
        for li in soup.select("div:-soup-contains('Расписание') + div li"):
            parts = li.text.strip().split('\n')
            schedule[parts[0]] = parts[1] if len(parts) > 1 else ''
        return LibrarySchedule(schedule)