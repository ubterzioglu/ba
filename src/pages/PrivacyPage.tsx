import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Gizlilik ve KVKK"
        description="Gizlilik politikası, çerez kullanımı ve KVKK/GDPR aydınlatma metni."
        path="/privacy"
      />
      <PageHeader title="Gizlilik &amp; KVKK" />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-dark/80">
        <section>
          <h2 className="text-xl font-bold text-primary">Çerez Politikası</h2>
          <p className="mt-3">
            Bu internet sitesinde yalnızca hizmetin sağlanması için kesinlikle
            gerekli olan birinci taraf çerezler kullanılmaktadır. Üçüncü taraf
            takip veya analiz çerezleri kullanılmamaktadır. Kesinlikle gerekli
            çerezler, sitenin temel işlevleri için zorunlu olduğundan ayrıca onay
            gerektirmez.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary">
            Kişisel Verilerin İşlenmesi (KVKK / GDPR)
          </h2>
          <p className="mt-3">
            İletişim formu veya bülten aboneliği aracılığıyla ilettiğiniz ad,
            e-posta ve mesaj bilgileri, yalnızca talebinize yanıt vermek ve sizinle
            iletişim kurmak amacıyla işlenir. Bu veriler güvenli altyapıda saklanır
            ve üçüncü taraflarla pazarlama amacıyla paylaşılmaz.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6">
            <li>
              <strong>İşleme amacı:</strong> İletişim taleplerine yanıt verilmesi
              ve bülten gönderimi.
            </li>
            <li>
              <strong>Hukuki dayanak:</strong> Açık rıza (formu göndererek
              verilir).
            </li>
            <li>
              <strong>Saklama süresi:</strong> İletişim/bülten amacının gerektirdiği
              süre boyunca.
            </li>
            <li>
              <strong>Haklarınız:</strong> Verilerinize erişim, düzeltme ve silinme
              talebinde bulunabilirsiniz.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary">İletişim</h2>
          <p className="mt-3">
            Veri işleme ile ilgili tüm talepleriniz için:{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-secondary underline"
            >
              {profile.email}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
