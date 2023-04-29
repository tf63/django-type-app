from django.test import TestCase
from django.urls import reverse, resolve
from ..views import IndexView, PostListView


class TestUrls(TestCase):
    def test_post_index_url(self):
        """index ページへのURLでアクセスする時のリダイレクトをテスト"""
        view = resolve("/test/")
        self.assertEqual(view.func.view_class, IndexView)

    def test_post_list_url(self):
        """Post 一覧ページへのリダイレクトをテスト"""
        view = resolve("/test/post_list")
        self.assertEqual(view.func.view_class, PostListView)
