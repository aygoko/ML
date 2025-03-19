class ParserInterface:
    def parse(self, html: str) -> object:
        raise NotImplementedError