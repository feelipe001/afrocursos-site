import unittest
import os
import re
import glob

class TestCourseLinks(unittest.TestCase):
    def test_course_links_exist(self):
        pattern = re.compile(r'href="cursos/([^"#]+\.html)"')
        for page in glob.glob('pagina*.html'):
            with open(page, encoding='utf-8') as f:
                content = f.read()
            for target in pattern.findall(content):
                path = os.path.join('cursos', target)
                self.assertTrue(os.path.isfile(path), f"{page}: {target} not found")

if __name__ == '__main__':
    unittest.main()
